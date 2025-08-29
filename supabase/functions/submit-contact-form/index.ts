import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.1";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  industry?: string;
  message?: string;
  formType: 'contact' | 'modal';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, industry, message, formType }: ContactFormRequest = await req.json();

    console.log("Received form submission:", { name, email, industry, formType });

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Store form submission in database
    const { error: dbError } = await supabase
      .from('contacts')
      .insert({
        name,
        email,
        industry: industry || null,
        message: message || null,
        form_type: formType
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Format email content
    const emailSubject = `Nova mensagem de contato - ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Nova Mensagem de Contato
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Informações do Contato:</h3>
          
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
          ${industry ? `<p><strong>Setor da Indústria:</strong> ${industry}</p>` : ''}
          <p><strong>Formulário:</strong> ${formType === 'modal' ? 'Pop-up Hero' : 'Fale Conosco'}</p>
        </div>

        ${message ? `
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
          <p>Esta mensagem foi enviada através do formulário de contato do site Safena.</p>
          <p>Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
        </div>
      </div>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Safena Site <noreply@resend.dev>",
      to: ["contato.safena@gmail.com"],
      subject: emailSubject,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Mensagem enviada com sucesso!" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in submit-contact-form function:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Erro ao enviar mensagem. Tente novamente." 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);