import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.1";
import { Resend } from "npm:resend@2.0.0";

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
    console.log("Function deployment timestamp:", new Date().toISOString());

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

    // TEMPORARY: Email sending disabled - data saved to database only
    console.log("Form data saved successfully to database. Email notification temporarily disabled.");

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