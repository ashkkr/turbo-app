import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Button } from "@repo/ui/button";

export default function Home(){
  return <Button children={'<span>Click</span>'} appName="New app"></Button>
}
