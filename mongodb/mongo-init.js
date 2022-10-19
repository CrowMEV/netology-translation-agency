// create coonection
conn = new Mongo();

// create and move to your new database
db = conn.getDB("altai");

// create new collection and set data
//_getEnv() for get variable from environment
db.site_data.insert(
    {
        city: _getEnv('CITY'),
        address: _getEnv('ADDRESS'),
        email: _getEnv("EMAIL"),
        admin_password: _getEnv("ADMIN_PASSWORD"),
        whatsapp: _getEnv("WHATSAPP"),
        telegram: _getEnv("TELEGRAM"),
        phone_1: _getEnv("PHONE_1"),
        phone_2: _getEnv("PHONE_2"),
        admin: _getEnv("ADMIN"),
    }
)
