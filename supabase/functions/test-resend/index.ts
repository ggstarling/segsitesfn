import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Test Resend function started");
    console.log("Timestamp:", new Date().toISOString());
    
    // Check if RESEND_API_KEY exists
    const apiKey = Deno.env.get('RESEND_API_KEY');
    console.log("RESEND_API_KEY found:", apiKey ? "YES" : "NO");
    console.log("RESEND_API_KEY length:", apiKey ? apiKey.length : 0);
    console.log("RESEND_API_KEY starts with 're_':", apiKey ? apiKey.startsWith('re_') : false);
    
    if (!apiKey) {
      console.error("RESEND_API_KEY not found in environment variables");
      const availableVars = Object.keys(Deno.env.toObject());
      console.error("Available env vars:", availableVars);
      throw new Error("Email service not configured properly - API key missing");
    }

    // Initialize Resend
    const resend = new Resend(apiKey);
    console.log("Resend client initialized");

    // Send test email
    console.log("Attempting to send test email...");
    const emailResponse = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: ["contato.safena@gmail.com"],
      subject: "Resend Test from Lovable",
      html: `
        <h1>Resend Integration Test</h1>
        <p>This is a test email to confirm the Resend integration is working.</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
        <p>Function: test-resend</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      message: "Test email sent successfully",
      emailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in test-resend function:", error);
    console.error("Error stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message,
        stack: error.stack
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