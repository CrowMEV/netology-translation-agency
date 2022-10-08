// create coonection
conn = new Mongo();

// create and move to your new database
db = conn.getDB("altai");

// create new collection and set data
//_getEnv() for get variable from environment
db.site_data.insert(
    {
        address: _getEnv('ADDRESS'),
        email: _getEnv("EMAIL"),
        whatsapp: _getEnv("WHATSAPP"),
        telegram: _getEnv("TELEGRAM"),
        phone_1: _getEnv("PHONE_1"),
        phone_2: _getEnv("PHONE_2")
    }
)
