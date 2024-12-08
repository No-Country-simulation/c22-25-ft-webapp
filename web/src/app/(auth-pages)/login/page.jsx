import { WrapperForm } from '@/components/organisms/forms/WrapperForm'
import { Section } from '@/components/atoms/Section'
import { LoginForm } from '@/components/organisms/forms/LoginForm'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <Section className="lg:grid lg:grid-cols-2 items-center min-h-screen lg:p-0">
      <Image
        width={200}
        height={200}
        src="/logo.svg"
        alt="Login"
        className="mx-auto lg:hidden"
      />
      <div className="hidden lg:grid place-items-center bg-pink-300 w-full h-full rounded-r-[200px]">
        <Image
          width={320}
          height={200}
          src="/logo-negative.svg"
          alt="Logo"
          className="Logo en negativo de SALUS"
        />
      </div>
      <WrapperForm title="Inicio de sesión">
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
