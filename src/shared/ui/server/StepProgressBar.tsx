import { cn } from '../../lib'

type Props = {
  label: string
  currentStep: number
  totalSteps: number
}

/**
 * 현재 폼 입력 단계를 시각적으로 표시하는 진행 바 컴포넌트
 */
export const StepProgressBar = ({ label, currentStep, totalSteps }: Props) => {
  const stepArray = Array.from({ length: totalSteps }, (_, i) => i)

  return (
    <div className="flex-column gap-9">
      <div className="font-step">{`Step ${currentStep}. ${label}`}</div>
      <div className="flex w-full gap-2.5">
        {stepArray.map((step) => {
          const isActive = currentStep > step

          return (
            <div
              key={step}
              className={cn(
                'rounded-small h-[1.0625rem] flex-1 duration-300',
                isActive ? 'bg-primary' : 'bg-grey',
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
