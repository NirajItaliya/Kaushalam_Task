// db.js
const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUHn69HuMGsdPCLw/LP80O4Ru8C14wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvZTg0NTI1N2ItZWRmNC00MjNlLTlhYjYtYWMxOGIzMWJk
NTYyIFByb2plY3QgQ0EwHhcNMjQxMTEwMDY1MTA5WhcNMzQxMTA4MDY1MTA5WjA6
MTgwNgYDVQQDDC9lODQ1MjU3Yi1lZGY0LTQyM2UtOWFiNi1hYzE4YjMxYmQ1NjIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALQ9Jfls
4sWiAZvOP0iR3Ka1bngWpiWSxKeCiAQEsX+olG8nRbGHd0rXJBp+3o8VYZ5YO8DZ
x5pSqkv6nXbutcryYZ2ZzNuDol99ZhhE+jZIddGuUpwA0nwi7Y3jN/I1LKLEGQJM
omoQJvzMLpV/6GmxOCPVf1SjXdQJRiT1sAgtuOR7BeMeL78kXYmIBCUKLf9zx0uG
uuoY56QNeE5Jne0a+cxwfbfNqkO8kj1w+xvf12v3d+m67y9nyTdSxzD42/Jm67/l
Xm94PwSwmFNv1yRBZ+yRxSOyY7nlB0CmL3IHkLrrzYHIBUk6GPUKulf7kfuggnMN
j0pBkt80fdXnYUv8iduzV9WXg0kz+FAYaP5f4PbSNMl4vUWxUMew7qvQFZwyHPCP
fWxrzKTYbN4eXTDPlfpLII7dceGDUekm29RNXmAvyh9zqLtxIT8VbZmvf8rndlM3
AAHzkhJSiMwne98z+BS6mDE+PWt5lnxfhiVLr6u7UsVhTmnLEjwylK+DpQIDAQAB
oz8wPTAdBgNVHQ4EFgQUN61E8LCJsUNl7rbsOq6saJHPNLkwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAG8BnZx4DYS5qT6R
8ForqsiLJ+st/7/XqVDT8TBSTuTTJrCZtlD6sC76Y9sERXhan4dGBh+HKWvmApuO
4soJZvDz5jo5fa89/wy/rZu3stVUKK/sGN3BtVhjpJHMFLP8Bukhwk0tttDpOHrV
a8EBxDorQ3L8YdNakOwJIyetnQ1ISFAYRUhORWGYuLCtnhOJ+PqeUebcm2ZBTCvW
uYg79ebMaGNvS6FcBVJJMktcWL4AIAFDIFjj6YLsuqJnvYp+jgK4u73ySL81Az79
qQp8ajRDkTVQlKFSneU2rkf0mEZ6+OePg9G1pCNRcWFm1+5anr85NPIfe+l42cK3
/E6D1LPpH+kbJ+vbw2n6UG0MxZ6r3OuI6dNj6LoXRC3i7fI3NvFoILzo3GKXkYcj
I6qVxRjfLjqXUyIYOgZqvY5uO2IeO4RpD176qGnSZWKwcaDnjWA4DBfUlOJawaM3
qB/W++MrrHV4l6jCh3chLAcpgitCQSwq9HPROujnoVtlqUK2wQ==
-----END CERTIFICATE-----`,
    },
});

module.exports = pool;