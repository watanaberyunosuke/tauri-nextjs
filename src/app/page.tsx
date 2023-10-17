import Greet from './greet'
import Homepage from './homepage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Greet />
      <Homepage />
    </main>
  )
}
