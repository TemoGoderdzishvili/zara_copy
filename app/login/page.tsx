'use client'
import styles from "./page.module.css"
import Image from "next/image"
import Logo from "../Components/Images//Zara_Logo.svg.png"
import LayoutImg from "../Components/Images/layout-image.jpeg"
import { z, ZodType } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


export default function Home() {
    const userSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(15)
    })

    type formFields = z.infer<typeof userSchema>

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<formFields>({
        resolver: zodResolver(userSchema)
    })

    const onSubmit = async (data: formFields) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data)
        reset()
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.leftSide}>
                <Image src={Logo} alt="zara logo" className={styles.logo} />

                <div className={styles.formWrapper}>
                    <p>LOG IN</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputDiv}>

                            <input type="email"
                                placeholder="EMAIL"
                                {...register('email')}
                            />
                            {errors.email && <span className={styles.errTxt}>{errors.email.message}</span>}
                            <input type="password"
                                placeholder="PASSWORD"
                                {...register('password')}
                            />
                            {errors.password && <span className={styles.errTxt}>{errors.password.message}</span>}
                        </div>
                        <div className={styles.btnDiv}>
                            <a href="/">Forgot your password?</a>
                            <button type="submit">{isSubmitting ? 'SUBMITTING...' : 'LOG IN'}</button>
                        </div>
                    </form>

                </div>

            </div>
            <div className={styles.rightSide}>
                <Image src={LayoutImg} alt="" className={styles.layoutImg} />
            </div>
        </div>
    )
}