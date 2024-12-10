import propTypes from 'prop-types'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
} from '@nextui-org/react'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'

export const CardDashboard = ({
  href = '/',
  title = 'DashBoard Card',
  object = 'dashboard',
  fullQuantity = '100',
  quantity,
  icon,
}) => {
  return (
    <Card className="w-full shadow p-4">
      <CardHeader>
        <Button
          isIconOnly
          color="danger"
          variant="flat"
          aria-label={object}
          as={Link}
          href={href}
        >
          {icon || <UserPlus />}
        </Button>
      </CardHeader>
      <CardBody className="py-0">
        <h3 className="text-2xl font-bold">{title}</h3>
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <Progress
          aria-label={title}
          value={
            quantity ? (Number(quantity) / Number(fullQuantity)) * 100 : 100
          }
        />
        <div className="flex justify-end w-full">
          <span>
            {quantity && <span className="text-sm">{quantity} de </span>}
            <span className="text-sm font-bold">
              {fullQuantity} {object}
            </span>
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}

CardDashboard.propTypes = {
  href: propTypes.string,
  title: propTypes.string,
  object: propTypes.string,
  quantity: propTypes.string,
  fullQuantity: propTypes.string,
  icon: propTypes.node,
}
