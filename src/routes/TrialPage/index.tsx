import { mkConfig, generateCsv, download } from "export-to-csv";

import { lazy, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { TIER_LISTS, TIER_TYPE } from "../../lib/constants/tier"
import { ItemType } from "./Trial.types";

const Button = lazy(() => import("../../components/Button"));

const AnalyticSection = lazy(() => import("./AnalyticSection.component"));
const ItemsSection = lazy(() => import("./ItemsSection.component"));

import ChartIcon from "../../assets/svgs/chart.svg"
import BoxIcon from "../../assets/svgs/box.svg"

import "./Trial.styles.scss"

export default function TrialPage() {
  const [selectedMenu, setSelectedMenu] = useState <"analytic" | "items">("analytic")
  const [currentTier, setCurrentTier] = useState<TIER_TYPE>()
  const [inventories, setInventories] = useState<ItemType[]>([
    {
      id: 1,
      name: "Egg",
      price: 40000,
    },
    {
      id: 2,
      name: "Book",
      price: 53000,
    },
  ])
  const [soldList, setSoldList] = useState<ItemType[]>([])

  const { tier } = useParams()
  const navigate = useNavigate()

  const csvConfig = mkConfig({
    useKeysAsHeaders: true,
    filename: selectedMenu === "items" ? "inventory-report" : "analytic-report"
  });

  const csv = generateCsv(csvConfig)(inventories);

  useEffect(() => {
    const selectedTier = TIER_LISTS.find(({ slug }) => tier === slug)

    if (!selectedTier) navigate("/")
    else setCurrentTier(selectedTier)
  }, [tier])

  useEffect(() => {
    if (!currentTier) return

    if (currentTier.slug === "basic") setSelectedMenu("items")
  }, [currentTier])

  return (
    <main className="trial">
      <aside className="trial__sidebar">
        <h3>Dashboard</h3>

        <ul className="sidebar__nenu">
          {currentTier?.slug !== "basic" && (
            <li>
              <button onClick={() => setSelectedMenu("analytic")}>
                <ChartIcon />
                <span>Analytics</span>
              </button>
            </li>
          )}
          <li>
            <button onClick={() => setSelectedMenu("items")}>
              <BoxIcon />
              <span>Items</span>
            </button>
          </li>
        </ul>
      </aside>

      <section className="trial__main">
        <div className="trial__header">
          <h3>{selectedMenu === "items" ? "Inventory" : "Analytic Overview"}</h3>
          {currentTier?.benefits.can_export_data_to_excel && (
            <Button
              width={200}
              outlined
              onClick={() => download(csvConfig)(csv)}
            >
                Export Data
            </Button>
          )}
        </div>

        {currentTier && selectedMenu === "analytic" && <AnalyticSection tier={currentTier} />}
        {currentTier && selectedMenu === "items" && (
          <ItemsSection
            items={inventories}
            soldList={soldList}
            onChange={(data) => setInventories(prev => [...prev, data])}
            onSold={(data) => {
              setSoldList(prev => [...prev, data])
              setInventories(inventories.filter(inv => inv.id !== data.id))
            }}
          />
        )}

      </section>
    </main>
  )
}
