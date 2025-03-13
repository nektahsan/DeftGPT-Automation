const fs = require("fs");
const { google } = require("googleapis");

const TOKEN_PATH = "token.json";

async function getMagicLink() {
    const credentials = JSON.parse(fs.readFileSync("credentials.json"));
    const { client_secret, client_id } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, "http://localhost:3000/oauth2callback");

    // ✅ Load the saved token
    if (fs.existsSync(TOKEN_PATH)) {
        oAuth2Client.setCredentials(JSON.parse(fs.readFileSync(TOKEN_PATH)));
    } else {
        console.error("❌ Token not found! Run `node gmailAuth.js` first.");
        return null;
    }

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    // ✅ Search for latest email with subject: "Your Login Link for DeftGPT"
    const res = await gmail.users.messages.list({
        userId: "me",
        q: "subject:Your Login Link for DeftGPT",
        maxResults: 1,
    });

    if (!res.data.messages || res.data.messages.length === 0) {
        console.log("❌ No magic link email found.");
        return null;
    }

    const messageId = res.data.messages[0].id;

    // ✅ Fetch email content
    const message = await gmail.users.messages.get({
        userId: "me",
        id: messageId,
    });

    // ✅ Extract email body content
    let emailBody = "";

    if (message.data.payload.parts) {
        for (const part of message.data.payload.parts) {
            if (part.mimeType === "text/plain") {
                emailBody = Buffer.from(part.body.data, "base64").toString("utf-8");
                break;
            }
        }
    } else {
        emailBody = Buffer.from(message.data.payload.body.data, "base64").toString("utf-8");
    }

    console.log("📩 Email Body:\n", emailBody);

    // ✅ Extract magic link from email
    const linkRegex = /(https:\/\/staging\.deftgpt\.com\/verify-email\/[a-zA-Z0-9]+)/;
    const match = emailBody.match(linkRegex);

    if (match) {
        console.log(`✅ Magic link found: ${match[0]}`);
        return match[0];
    } else {
        console.log("❌ No magic link found in email.");
        return null;
    }
}

module.exports = { getMagicLink };
