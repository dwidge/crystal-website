# npx wrangler d1 migrations list DB --local
npx wrangler d1 migrations apply DB --local
# npx wrangler d1 execute dev --local --file=./functions/seed.sql
npx wrangler d1 execute dev --local --command='SELECT * FROM orders'
