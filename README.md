# Touch Egg

触るだけ。いつか生まれる。世界の神話・伝説・古生物を集める、ほぼ何もしない育成コレクションゲームです。

## MVP
- 卵をタップするとランダムな回数で孵化
- COMMON / RARE / EPIC / LEGENDARY の重み付き抽選
- 未発見種を少し優遇、COMMON連続時にレア補正
- 赤ちゃん → 子ども → 成体 → 産卵 → 次世代
- 図鑑、約20文字のうんちく、根拠リンク
- Google OAuth (Supabase)
- 未ログイン時はlocalStorage、ログイン時はSupabaseへ同期

## Supabase
1. SQL Editorで `supabase/schema.sql` を実行
2. Authentication > Sign In / Providers > Google を有効化
3. Vercelに環境変数を登録
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

クリーチャー追加は `lib/creatures.ts` に1件足すだけです。根拠URLを必須で持たせる運用にしてください。
