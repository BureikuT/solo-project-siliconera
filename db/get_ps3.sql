select * from siliconera_articles where  CAST(systems AS text) LIKE '%ps3%'
order by created_on desc
