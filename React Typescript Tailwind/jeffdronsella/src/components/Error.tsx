import Header from "./Header";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main className="flex-col justify-center">
        <div className="w-1/2 pt-2 pb-4 rounded-2xl mx-auto mt-8">
          <h2 className="text-4xl mt-4 text-center">Page not found</h2>
          <img src="./background.jpg" className="mt-4" />
          <p className="text-2xl mt-4 text-center">Please select a menu item above.</p>
        </div>
      </main>
    </>
  )
}