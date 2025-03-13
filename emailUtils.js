const imap = require('imap-simple');

async function getMagicLink() {
    const email = "automationtesting077@gmail.com";  // ✅ Hardcoded email
    const password = "ahsan@123";  // ❌ Avoid exposing credentials in production!

    console.log(`📩 Checking email for: ${email}`); // Debug log

    const config = {
        imap: {
            user: email,
            password: password,
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    const connection = await imap.connect(config);
    await connection.openBox('INBOX');

    // Search for unread emails
    const searchCriteria = ['UNSEEN'];
    const fetchOptions = { bodies: ['TEXT'], markSeen: true };

    const messages = await connection.search(searchCriteria, fetchOptions);
    for (let message of messages) {
        const body = message.parts.find(part => part.which === 'TEXT').body;
        
        // Extract magic link
        const linkRegex = /(https?:\/\/[^\s]+)/;
        const match = body.match(linkRegex);

        if (match) {
            return match[0]; // ✅ Return magic link
        }
    }

    return null; // ❌ No link found
}

module.exports = { getMagicLink };
