select * from siliconera_articles where  CAST(systems AS text) LIKE '%vita%'
order by created_on desc
