import Breadcrumb from "@/app/ui/uiKit/breadcrumbs/breadcrumbs";
import ContactsPage from "@/app/ui/contactsPage/contactsPage";

export default function Page() {
    return (
        <div className="inner-page-container">
            <Breadcrumb />
            <ContactsPage />
        </div>
    )
}