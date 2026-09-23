import { ANNOUNCEMENTS } from "@/lib/site-data";
export function Announcements(){return <div className="overflow-hidden bg-gold py-3 text-navy"><div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-bold">{[...ANNOUNCEMENTS,...ANNOUNCEMENTS].map((a,i)=><span key={i}>• {a}</span>)}</div></div>}
