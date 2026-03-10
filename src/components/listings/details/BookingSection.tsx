import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BookingCard from "@/components/ui/listingDetails/BookingCard";

interface BookingSectionProps {
    price: string;
    onDatesChange: (startDate: Date | null, endDate: Date | null) => void;
    onAttendeesChange?: (count: number) => void;
    category?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price, onDatesChange, onAttendeesChange, category }) => {
    const displayPrice = price.startsWith("$") ? price.slice(1) : price;
    const isEventSpace = category?.toLowerCase() === "event space";

    const formik = useFormik({
        initialValues: {
            startDate: null as Date | null,
            endDate: null as Date | null,
            attendees: "" as string | number,
        },
        validationSchema: Yup.object({
            startDate: Yup.date().nullable().required("Required"),
            endDate: Yup.date().nullable().required("Required"),
            attendees: isEventSpace
                ? Yup.number().typeError("Must be a number").min(1, "Minimum 1 attendee").required("Required")
                : Yup.mixed().notRequired(),
        }),
        onSubmit: (values) => {
            console.log("Booking values:", values);
        },
    });

    // Wrap setFieldValue to emit values to parent
    const handleSetFieldValue = (field: string, value: any, shouldValidate?: boolean) => {
        formik.setFieldValue(field, value, shouldValidate);

        if (field === "startDate" || field === "endDate") {
            const updatedStart = field === "startDate" ? value : formik.values.startDate;
            const updatedEnd = field === "endDate" ? value : formik.values.endDate;
            onDatesChange(updatedStart, updatedEnd);
        }

        if (field === "attendees") {
            onAttendeesChange?.(Number(value));
        }
    };

    const patchedFormik = { ...formik, setFieldValue: handleSetFieldValue };

    return (
        <section>
            <BookingCard
                price={displayPrice}
                formik={patchedFormik}
                isEventSpace={isEventSpace}
            />
        </section>
    );
};

export default BookingSection;