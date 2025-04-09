// /pages/list.tsx
import { useEffect, useState } from "react";
import AuctionCard from "../components/AuctionCard";
import auctionsData from "../data/sample-auctions.json";

export default function ListPage() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    setAuctions(auctionsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">경매 사건 리스트</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {auctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
}

// /components/AuctionCard.tsx
import Link from "next/link";

export default function AuctionCard({ auction }) {
  return (
    <Link href={`/detail/${auction.id}`}>
      <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
        <h2 className="text-xl font-semibold mb-2">{auction.caseNumber}</h2>
        <p className="text-gray-700">📅 매각기일: {auction.saleDate}</p>
        <p className="text-gray-700">📍 소재지: {auction.address}</p>
        <p className="text-gray-700">💰 감정가: {auction.appraisalPrice.toLocaleString()}원</p>
      </div>
    </Link>
  );
}

// /pages/detail/[id].tsx
import { useRouter } from "next/router";
import auctionsData from "../../data/sample-auctions.json";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const auction = auctionsData.find((item) => item.id === id);

  if (!auction) return <div className="p-6">해당 사건을 찾을 수 없습니다.</div>;

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">{auction.caseNumber} 상세정보</h1>
      <p className="mb-2">📅 <strong>매각기일:</strong> {auction.saleDate}</p>
      <p className="mb-2">📍 <strong>소재지:</strong> {auction.address}</p>
      <p className="mb-2">💰 <strong>감정가:</strong> {auction.appraisalPrice.toLocaleString()}원</p>

      <div className="mt-6 p-4 bg-gray-50 rounded-xl border">
        <h2 className="text-xl font-semibold mb-2">AI 분석 예정 영역 🤖</h2>
        <p className="text-gray-600">GPT를 통해 말소기준권리, 명도 난이도, 수익률 등을 분석할 예정입니다.</p>
      </div>
    </div>
  );
}

// /data/sample-auctions.json
[
  {
    "id": "2024-001",
    "caseNumber": "2024타경1234",
    "saleDate": "2025-04-25",
    "address": "부산 해운대구 좌동 123",
    "appraisalPrice": 320000000
  },
  {
    "id": "2024-002",
    "caseNumber": "2024타경5678",
    "saleDate": "2025-04-30",
    "address": "부산 수영구 민락동 456",
    "appraisalPrice": 185000000
  },
  {
    "id": "2024-003",
    "caseNumber": "2024타경9876",
    "saleDate": "2025-05-02",
    "address": "부산 연제구 연산동 789",
    "appraisalPrice": 410000000
  }
]
