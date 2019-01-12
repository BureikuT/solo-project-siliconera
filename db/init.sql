CREATE TABLE siliconera_users (
    id SERIAL PRIMARY KEY,
    auth_id TEXT,
    name VARCHAR,
    email VARCHAR,
    picture TEXT,
    type int
)

alter table siliconera_users
add type int

select * from siliconera_users

create table user_types (
    id int PRIMARY KEY,
    title varchar(20)
);

alter table siliconera_users
add type int references user_types(id)

select * from siliconera_users

select * from users

-- CREATE TABLE siliconera_articles (
--   article_id SERIAL PRIMARY KEY NOT NULL,
--   title varchar(110) NOT NULL,
--   preview_image text NOT NULL,
--   preview_summary text,
--     image text NOT NULL,
--   article text NOT NULL,
--   systems text[] NOT NULL DEFAULT '{}',
--   locations text[] NOT NULL DEFAULT '{}',
-- author_name text NOT NULL,
--   author_id integer references siliconera_users(id),
--  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE  siliconera_comments (
--     id SERIAL PRIMARY KEY NOT NULL,
--     user_id int REFERENCES siliconera_users(id),
--     article_id int REFERENCES siliconera_articles(article_id),
--     comment varchar(250) NOT NULL,
--     created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
-- )


-- select * from siliconera_comments
-- inner join siliconera_users
-- on siliconera_users.id = siliconera_comments.user_id
-- where siliconera_comments.article_id = 1

-- select * from siliconera_articles where  CAST(systems AS text) LIKE '%x360%'