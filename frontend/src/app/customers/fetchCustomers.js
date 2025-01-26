export default async function fetchCustomers() {
  // エラー①: .envファイルが設定されていない＋プリフィックス"NEXT_PUBLIC_"が必要
  // console.logでNEXT_PUBLIC_API_ENDPOINTを表示（.envが読み込まれていることを確認）
  console.log(
    "NEXT_PUBLIC_API_ENDPOINT:",
    process.env.NEXT_PUBLIC_API_ENDPOINT
  );

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_ENDPOINT + "/allcustomers",
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch customers");
  }
  return res.json();
}
