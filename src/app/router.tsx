import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./app_shell";
import { DashboardPage } from "../pages/dashboard_page";
import { CollectionsPage } from "../pages/collections_page";
import { MapReferencePage } from "../pages/map_reference_page";
import { NotesPage } from "../pages/notes_page";
import { DataPage } from "../pages/data_page";
import { SettingsPage } from "../pages/settings_page";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/map-reference" element={<MapReferencePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
