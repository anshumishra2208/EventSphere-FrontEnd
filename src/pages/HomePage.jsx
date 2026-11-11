import { Briefcase, ChevronRight, Compass, Cpu, Flame, GraduationCap, Map, MapIcon, MapPin, Music, Palette, Sparkles, Tag, Trophy } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Button } from '../components/ui/button'
import axios from 'axios';
import FeaturedCarousel from '../components/ui/FeaturedCarousel';

function getIconComponent(category) {
    const { icon } = category;

    if (icon === "palette") {
        return Palette;
    }

    if (icon === "briefcase") {
        return Briefcase;
    }

    if (icon === "graduation-cap") {
        return GraduationCap;
    }

    if (icon === "music") {
        return Music;
    }

    if (icon === "trophy") {
        return Trophy;
    }

    if (icon === "cpu") {
        return Cpu;
    }

    return Tag
}

function getCategoryColor(i) {

    const colors = [
        {
            icon: "bg-orange-50 text-[#E65100] border-orange-200 group-hover:bg-[#E65100] group-hover:text-white",
            text: "group-hover:text-[#E65100]",
        },
        {
            icon: "bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
            text: "group-hover:text-blue-600",
        },
        {
            icon: "bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
            text: "group-hover:text-emerald-600",
        },
        {
            icon: "bg-purple-50 text-purple-700 border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
            text: "group-hover:text-purple-600",
        },
        {
            icon: "bg-rose-50 text-rose-700 border-rose-200 group-hover:bg-rose-600 group-hover:text-white",
            text: "group-hover:text-rose-600",
        },
        {
            icon: "bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-600 group-hover:text-white",
            text: "group-hover:text-amber-600",
        },
    ];

    return colors[i];
}

const HUB_CITIES = [
    {
        name: "Bengaluru",
        label: "Tech & Acoustic Nights",
        img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=500&q=80",
    },
    {
        name: "Mumbai",
        label: "Indie Festivals & Art",
        img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=500&q=80",
    },
    {
        name: "Delhi NCR",
        label: "Conclaves & Founder Pitch",
        img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=500&q=80",
    },
    {
        name: "Pune",
        label: "Heritage & Code Labs",
        img: "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=500&q=80",
    },
];

function HomePage() {

    const [isLoading, setIsLoading] = useState(false);
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [trendingEvents, setTrendingEvents] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        async function loadHomePage() {

            try {
                let { data: { data } } = await axios.get("https://eventsphere-server-mfdb.onrender.com/api/events ");
                setFeaturedEvents(data);

            } catch (error) {

            }

            try {
                let { data: { data } } = await axios.get("https://eventsphere-server-mfdb.onrender.com/api/categories");
                setCategories(data);

            } catch (error) {

            }

            try {
                let { data: { data } } = await axios.get("https://eventsphere-server-mfdb.onrender.com/api/events?limit=8&sort=startDate&order=asc");
                setTrendingEvents(data);

            } catch (error) {

            }

            finally {
                setIsLoading(false)
            }
        }

        loadHomePage();

    }, [])


    return (
        <div className="space-y-16 pb-20">

            <section className="relative pt-12 pb-6 sm:pt-16 sm:pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-10 border-b border-[#EBE8DF]">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100/70 text-[#C2410C] border border-orange-200">
                            <Sparkles className="w-3.5 h-3.5" /> India's Curated Community
                            Conclaves
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111] leading-[1.08]">
                            Extraordinary gatherings for curious minds.
                        </h1>
                        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                            Discover verified developer summits, acoustic indie evenings,
                            founder pitch conclaves, and art retreats across Bengaluru,
                            Mumbai, and Delhi NCR.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                        <Link to="/explore">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full sm:w-auto shadow-elevated gap-2"
                            >
                                <Compass className="w-4 h-4" />
                                <span>Explore 40+ Gatherings</span>
                            </Button>
                        </Link>
                        <Link to="/create-event">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto"
                            >
                                Host an Event
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-2">
                        <Flame className="w-5 h-5 text-[#E65100]" />
                        <h2 className="text-xl font-bold text-stone-900 tracking-tight">
                            Curated Spotlight
                        </h2>
                    </div>
                    <Link
                        to="/explore"
                        className="text-xs font-semibold text-[#E65100] hover:underline flex items-center gap-1"
                    >
                        Browse all <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {isLoading ? (
                    <div className="aspect-21/9 rounded-3xl bg-[#EBE8DF]/50 animate-pulse"></div>
                ) : (
                    <FeaturedCarousel events={featuredEvents} />
                )}
            </section>

            {/* Upcoming Gatherings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#EBE8DF]">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Upcoming Gatherings
            </h2>
            <p className="text-xs text-stone-500">
              Verified community events happening in the coming days
            </p>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs rounded-lg font-medium border border-[#CCC8BA] bg-transparent hover:bg-[#F2F1EC] text-[#222]"
          >
            <span>View All Events</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}

          {
            trendingEvents.map((e)=>{
                
            })
          }
          <Link
            to="/events/next-gen-react-summit"
            className="group bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:border-[#D5D0C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
                  alt="Next-Gen React & Server Components Summit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-md shadow-sm">
                    Technology & AI
                  </span>
                  <button
                    type="button"
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-stone-700 text-xs"
                  >
                    <span>🔖</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C2410C]">
                  <span>📅</span>
                  <span>Sat, Nov 15, 2026</span>
                  <span className="text-stone-300 font-normal">•</span>
                  <span className="text-stone-500 font-normal truncate">Bengaluru</span>
                </div>
                <h3 className="font-bold text-base text-[#111] leading-snug line-clamp-2 group-hover:text-[#E65100] transition-colors">
                  Next-Gen React & Server Components Summit
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-xs mt-1">
              <span className="capitalize text-stone-500 font-medium">In-Person</span>
              <span className="text-sm font-bold text-stone-900">₹1,499</span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/events/acoustic-sunset-indie-showcase"
            className="group bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:border-[#D5D0C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
                  alt="Acoustic Sunset Indie Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-md shadow-sm">
                    Live Music
                  </span>
                  <button
                    type="button"
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-stone-700 text-xs"
                  >
                    <span>🔖</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C2410C]">
                  <span>📅</span>
                  <span>Fri, Nov 22, 2026</span>
                  <span className="text-stone-300 font-normal">•</span>
                  <span className="text-stone-500 font-normal truncate">Mumbai</span>
                </div>
                <h3 className="font-bold text-base text-[#111] leading-snug line-clamp-2 group-hover:text-[#E65100] transition-colors">
                  Acoustic Sunset Indie Showcase
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-xs mt-1">
              <span className="capitalize text-stone-500 font-medium">In-Person</span>
              <span className="text-sm font-bold text-stone-900">₹799</span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/events/founders-angel-pitch-conclave"
            className="group bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:border-[#D5D0C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
                  alt="Founders & Angel Pitch Conclave"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-md shadow-sm">
                    Startups & VC
                  </span>
                  <button
                    type="button"
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-stone-700 text-xs"
                  >
                    <span>🔖</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C2410C]">
                  <span>📅</span>
                  <span>Sat, Dec 05, 2026</span>
                  <span className="text-stone-300 font-normal">•</span>
                  <span className="text-stone-500 font-normal truncate">Delhi NCR</span>
                </div>
                <h3 className="font-bold text-base text-[#111] leading-snug line-clamp-2 group-hover:text-[#E65100] transition-colors">
                  Founders & Angel Pitch Conclave
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-xs mt-1">
              <span className="capitalize text-stone-500 font-medium">Hybrid</span>
              <span className="text-sm font-bold text-stone-900">Free</span>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/events/pottery-ceramic-studio-retreat"
            className="group bg-white rounded-2xl border border-[#EAE7DC] overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:border-[#D5D0C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
                  alt="Pottery & Ceramic Studio Retreat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-md shadow-sm">
                    Arts & Culture
                  </span>
                  <button
                    type="button"
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-stone-700 text-xs"
                  >
                    <span>🔖</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C2410C]">
                  <span>📅</span>
                  <span>Sun, Dec 13, 2026</span>
                  <span className="text-stone-300 font-normal">•</span>
                  <span className="text-stone-500 font-normal truncate">Jaipur</span>
                </div>
                <h3 className="font-bold text-base text-[#111] leading-snug line-clamp-2 group-hover:text-[#E65100] transition-colors">
                  Pottery & Ceramic Studio Retreat
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-xs mt-1">
              <span className="capitalize text-stone-500 font-medium">In-Person</span>
              <span className="text-sm font-bold text-stone-900">₹2,200</span>
            </div>
          </Link>
        </div>
      </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
                <div>
                    <h2 className="text-xl font-bold text-stone-900 tracking-tight">Browse by Discipline</h2>
                    <p className="text-xs text-stone-500">Curated tracks dynamically fetched from our active community listings</p>
                </div>

                {
                    isLoading ?
                        (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
                                {[...Array(6)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-2xl bg-white border border-[#EBE8DF] animate-pulse space-y-3"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-stone-100" />
                                        <div className="space-y-1.5">
                                            <div className="h-3.5 bg-stone-100 rounded w-3/4" />
                                            <div className="h-2.5 bg-stone-100 rounded w-1/2" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) :
                        (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">

                                {
                                    categories.map((c, i) => {

                                        const { name, eventCount } = c;
                                        const Icon = getIconComponent(c)
                                        const color = getCategoryColor(i)

                                        return <Link
                                            key={i}
                                            to="/explore"
                                            className="p-4 rounded-2xl bg-white border border-[#EBE8DF] hover:border-[#D5D0C2] hover:shadow-subtle transition-all duration-200 group flex flex-col justify-between"
                                        >
                                            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 transition-all duration-200 ${color.icon}`}>
                                                <Icon />
                                            </div>
                                            <div>
                                                <p className={`text-xs font-bold text-stone-900 leading-snug group-hover:text-[#E65100] transition-colors ${color.text}`}>
                                                    {name}
                                                </p>
                                                <p className="text-[11px] text-stone-400 mt-0.5">{eventCount}</p>
                                            </div>
                                        </Link>

                                    })
                                }











                            </div>
                        )
                }


            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
                <div>
                    <h2 className="text-xl font-bold text-stone-900 tracking-tight">Explore by Community Hub</h2>
                    <p className="text-xs text-stone-500">Vibrant hubs where local conclaves thrive</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        HUB_CITIES.map((c, i) => {
                            const { name, label, img } = c;
                            return <Link
                                key={i}
                                to="/explore"
                                className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-900 shadow-subtle border border-[#EBE8DF]"
                            >
                                <img
                                    src={img}
                                    alt="Bengaluru"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="flex items-center gap-1.5 text-orange-400 text-xs font-semibold">
                                        <MapPin />
                                        <span>{name}</span>
                                    </div>
                                    <p className="text-xs text-stone-300 font-medium mt-0.5">{label}</p>
                                </div>
                            </Link>
                        })
                    }



                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#1C1B18] text-white rounded-3xl p-8 sm:p-12 border border-[#33312B] flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl space-y-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A65]">
                            Empowering Community Hosts
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                            Host your next summit, workshop or indie showcase on EventSphere.
                        </h2>
                        <p className="text-sm text-stone-300 leading-relaxed">
                            Every registered user can organize events. Enjoy seamless ticketing, automatic calendar syncing, verified attendee reviews, and real-time dashboard analytics.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                        <Link
                            to="/create-event"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl bg-[#E65100] text-white hover:bg-[#D84315] w-full sm:w-auto shadow-lg"
                        >
                            Create Event Now
                        </Link>
                        <Link
                            to="/profile"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold px-5 py-2.5 text-base rounded-xl w-full sm:w-auto bg-white/10 text-white border border-white/20 hover:bg-white/20"
                        >
                            Organizer Portal
                        </Link>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default HomePage