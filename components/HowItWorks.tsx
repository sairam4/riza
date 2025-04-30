export default function HowItWorks() {
  return (
    <>
      <section className="w-full h-[500px] px-4 overflow-hidden bg-[url('/images/bg1.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left illustration */}
          <div className="w-full md:w-1/3 flex justify-center h-full">
            <img src="/images/howitworks2.png" alt="Step Illustration" className="h-full object-contain" />
          </div>

          {/* Center text */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl font-bold text-primary mb-2">Step 1:</h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">Personalized Meal Quiz</h3>
            <p className="text-lg text-secondary leading-relaxed">
              Start with a short and simple quiz. Tell us your goals, dietary needs, how many meals you want per week,
              and the cuisines you love. We use this to craft your ideal plan.
            </p>
          </div>

          {/* Right illustration */}
          <div className="w-full md:w-1/3 flex justify-center h-full">
            <img src="/images/howitworks1.png" alt="Step Illustration" className="h-full object-contain" />
          </div>
        </div>
      </section>

      <section className="w-full h-[500px] px-4 overflow-hidden bg-[url('/images/bg1.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left illustration */}
          <div className="w-full md:w-1/3 flex justify-center h-full">
            <img src="/images/step2left2.png" alt="Step Illustration" className="h-full object-contain" />
          </div>

          {/* Center text */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl font-bold text-primary mb-2">Step 2:</h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">Choose Your Weekly Meals</h3>
            <p className="text-lg text-secondary leading-relaxed">
              Based on your preferences, select meals from a rotating menu of fresh, nutritious dishes. Pick your favorites—our chefs will cook them in your kitchen.
            </p>
          </div>

          {/* Right illustration */}
          <div className="w-full md:w-1/3 flex justify-center h-full">
            <img src="/images/step2right.png" alt="Step Illustration" className="h-full object-contain" />
          </div>
        </div>
      </section>
      <section className="w-full h-[500px] px-4 overflow-hidden bg-[url('/images/bg1.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left illustration */}
          <div className="w-full md:w-1/3 flex justify-center h-full">
            <img src="/images/step3left2.png" alt="Step Illustration" className="h-full object-contain" />
          </div>

          {/* Center text */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl font-bold text-primary mb-2">Step 3:</h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">Chef Cooks at Your Home</h3>
            <p className="text-lg text-secondary leading-relaxed">
              Our professional chef arrives with fresh ingredients and cooks your chosen meals in your kitchen. You get to relax while we handle everything!
            </p>
          </div>

          {/* Right illustration */}
          <div className="w-full md:w-1/3 flex justify-center h-full">
            <img src="/images/step3right.png" alt="Step Illustration" className="h-full object-contain" />
          </div>
        </div>
      </section>
      <section className="w-full h-[500px] px-4 overflow-hidden bg-[url('/images/bg1.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left illustration */}
          <div className="w-full md:w-1/3 flex justify-center h-full">
            <img src="/images/step4left.png" alt="Step Illustration" className="h-full object-contain" />
          </div>

          {/* Center text */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl font-bold text-primary mb-2">Step 4:</h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">Enjoy Fresh Meals</h3>
            <p className="text-lg text-secondary leading-relaxed">
              Sit back and enjoy your meals! No prep, no mess. Just delicious, home-cooked dishes tailored to your preferences.
            </p>
          </div>

          {/* Right illustration */}
          <div className="w-full md:w-1/3 flex justify-center h-full">
            <img src="/images/step4right.png" alt="Step Illustration" className="h-full object-contain" />
          </div>
        </div>
      </section>
    </>
  )
}