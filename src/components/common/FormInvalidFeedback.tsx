import { FormControl } from "@bootstrap";

export default function InputInvalidFeedback<T>({ message }: { message: string | undefined }) {
    return (
        message ? (
            <FormControl.Feedback type="invalid"><div>{message}</div></FormControl.Feedback>
        ) : null
    )
}
