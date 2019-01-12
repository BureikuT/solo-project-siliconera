select * from siliconera_articles where  CAST(systems AS text) LIKE '%x360%'
order by created_on desc