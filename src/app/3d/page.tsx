import { Metadata } from "next";
import Client3DPage from "./Client3DPage";

export const metadata: Metadata = {
  title: "3D",
  description: "Blender で作成したものたち",
};

export default function ThreeD() {
  return <Client3DPage />;
}
