import { WrapperForm } from "@/components/organisms/forms/WrapperForm";
import { Section } from "@/components/atoms/Section";
import { LoginForm } from "@/components/organisms/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Section className="lg:grid lg:grid-cols-2 min-h-screen">
      <Image
        width={200}
        height={200}
        src="/logo.svg"
        alt="Login"
        className="mx-auto lg:hidden"
      />
      <div className="hidden lg:grid place-items-center bg-red-600 w-full h-full">
        <Image
          width={320}
          height={200}
          src="/logo.svg"
          alt="Login"
          className=""
        />
      </div>
      <WrapperForm title="Inicio de sesión" className="mt-32">
        <LoginForm />
        <div className="text-center flex flex-col gap-2 text-sm">
          <Link
            href="/forgot-password"
            className="text-cloud-300 hover:text-cloud-500 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <span>
            ¿No tienes cuenta?{` `}
            <Link
              href="/register"
              className="text-cloud-300 hover:text-cloud-500 hover:underline"
            >
              Regístrate aquí
            </Link>
          </span>
        </div>
      </WrapperForm>
    </Section>
  )
}
