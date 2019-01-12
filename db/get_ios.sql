select * from siliconera_articles where  CAST(systems AS text) LIKE '%ios%'
order by created_on desc
