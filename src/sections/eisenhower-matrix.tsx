import Card from "@/components/card";

export default function EisenhowerMatrix() {
  return (
    <section className="flex-[1] grid grid-cols-2 gap-1">
      <Card className="border-red-400"/>
      <Card className="border-yellow-400"/>
      <Card className="border-green-400"/>
      <Card className="border-blue-400"/>
    </section>
  )
}
