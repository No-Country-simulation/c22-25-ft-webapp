import { WrapperForm } from "@/components/organisms/forms/WrapperForm";
import { Section } from "@/components/atoms/Section";
import { RegisterForm } from "../../components/organisms/forms/RegisterForm";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
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
      <WrapperForm title="Registro" className="mt-32">
        <RegisterForm />
        <div className="text-center flex flex-col gap-2 text-sm">
          <span>
            ¿Tienes cuenta?{` `}
            <Link
              href="/login"
              className="text-cloud-300 hover:text-cloud-500 hover:underline"
            >
              Inicia sesión aquí
            </Link>
          </span>
        </div>
      </WrapperForm>
    </Section>
  )
}

