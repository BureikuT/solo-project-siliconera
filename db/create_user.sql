INSERT INTO siliconera_users (auth_id,name,email,picture,type)
VALUES (${sub}, ${name}, ${email}, ${picture}, 3)
RETURNING *;