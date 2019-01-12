select * from siliconera_articles where  CAST(systems AS text) LIKE '%switch%'
order by created_on desc
