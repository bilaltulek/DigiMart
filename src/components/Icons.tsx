import { LucideProps } from "lucide-react";

export const Icons = {
    logo: (props: LucideProps) => (
        <svg
            {...props}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
        <rect width="512" height="512" rx="60" fill="#7D26CD" />
        <path
            d="M160 368V144h62c38 0 70 23 70 64 0 34-24 57-55 62l67 98h-40l-63-94h-1v94h-40zm40-122h20c21 0 36-11 36-32s-15-34-36-34h-20v66z"
            fill="white"
        />
        <path
            d="M290 368V144h40v176h90v48H290z"
            fill="white"
        />
        </svg>
    )
}