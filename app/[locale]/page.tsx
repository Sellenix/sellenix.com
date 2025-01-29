import { useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

const DynamicDataVisualizationHeader = dynamic(() => import("@/app/components/DataVisualizationHeader"), { ssr: false })

export default function Home() {
  const t = useTranslations("home")
  const f = useTranslations("features")
  const p = useTranslations("plans")

  const features = f.raw("items") as Array<{ id: string; title: string; description: string }>
  const plans = p.raw("items") as Array<{ id: string; title: string; price: string; features: string[] }>

  return (
    <div className="relative">
      <DynamicDataVisualizationHeader />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 space-y-24">
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">{t("title")}</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-200">{t("description")}</p>
            <Link
              href="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:text-indigo-600 dark:bg-white dark:hover:bg-gray-50 transition duration-300"
            >
              {t("getStarted")}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{item.price}</p>
                <ul className="mt-4 space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-indigo-600" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                  {t("selectPlan")}
                </button>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

