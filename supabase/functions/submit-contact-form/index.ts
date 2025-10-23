import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.1";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Phone must match format (XX) XXXXX-XXXX").optional().or(z.literal("")),
  industry: z.string().trim().max(100, "Industry must be less than 100 characters").optional().or(z.literal("")),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters").optional().or(z.literal("")),
  formType: z.enum(['contact', 'modal'])
});

type ContactFormRequest = z.infer<typeof contactFormSchema>;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    
    // Validate input data
    const validationResult = contactFormSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Dados inválidos. Verifique os campos e tente novamente." 
        }),
        {
          status: 400,
          headers: { 
            "Content-Type": "application/json", 
            ...corsHeaders 
          },
        }
      );
    }

    const { name, email, phone, industry, message, formType } = validationResult.data;

    console.log("Received form submission:", { name, email, phone, industry, formType });
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
        phone: phone || null,
        industry: industry || null,
        message: message || null,
        form_type: formType
      });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Erro ao salvar dados. Tente novamente." 
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