const fs = require("fs");
const express = require("express");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
const TOKEN_PATH = "token.json";
const PORT = 3000; // ✅ Must match Google Cloud redirect URI

async function authenticateGmail() {
    const credentials = JSON.parse(fs.readFileSync("credentials.json"));
    const { client_secret, client_id } = credentials.installed;

    // ✅ Ensure the redirect URI matches Google Cloud settings
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, `http://localhost:${PORT}/oauth2callback`);

    if (fs.existsSync(TOKEN_PATH)) {
        console.log("✅ Token already exists. Gmail API is authenticated.");
        return;
    }

    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
    });

    console.log(`🔑 Open this URL in your browser to authenticate Gmail API:\n${authUrl}`);

    // ✅ Create an Express.js server to handle the redirect
    const app = express();

    app.get("/oauth2callback", async (req, res) => {
        const code = req.query.code;
        if (!code) {
            res.send("❌ Error: No code found.");
            return;
        }

        try {
            const { tokens } = await oAuth2Client.getToken(code);
            oAuth2Client.setCredentials(tokens);
            fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
            res.send("✅ Authentication successful! You can close this window.");
            console.log("✅ Token saved! Gmail API is now authenticated.");
            process.exit(0);
        } catch (error) {
            res.send("❌ Authentication error: " + error.message);
            console.error("❌ Error:", error);
        }
    });

    app.listen(PORT, () => {
        console.log(`🚀 Waiting for authentication on http://localhost:${PORT}/oauth2callback ...`);
    });
}

authenticateGmail();
