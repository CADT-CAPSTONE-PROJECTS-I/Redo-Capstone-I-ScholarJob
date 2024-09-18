import {
  React,
  Navbar,
  Footer,
  axios,
  useEffect,
  useState,
  UnderlineTab,
  AboutUsTab,
  Offerings,
  useParams,
  ScholarJobLogoGreen,
} from "../import/all_import.jsx";

const OrganizationDetails = () => {
  const { id } = useParams(); // Get the organization ID from URL
  const [organization, setOrganization] = useState(null); // State to store organization details
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    // Fetch organization details by ID using Axios
    const fetchOrganizationDetails = async () => {
      try {
        const response = await axios.get(
          `https://dev-career.cammob.ovh/capstone/Backend/public/api/organization/detail/${id}`
        );
        if (response.data.status) {
          setOrganization(response.data.data); // Update organization state with fetched data
        } else {
          setError("Organization not found");
        }
      } catch (err) {
        setError("Failed to fetch organization details");
      } finally {
        setLoading(false); // Stop loading when fetch is done
      }
    };

    fetchOrganizationDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto">
      <header className="p-12">
        <Navbar />
      </header>
      <div className="text-white max-w-screen-lg mx-auto p-8 bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 shadow-lg rounded-lg">
        <div className="flex">
          <img
            src={organization.image_url || ScholarJobLogoGreen} // Replace with default image if null
            alt={`${organization.name}`}
            className="w-[180px] self-start"
          />
          <div className="ml-20 flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{organization.name}</h1>
            <p className="font-medium">{organization.industry_type}</p>
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div className="max-w-screen-lg mx-auto mt-4">
        <UnderlineTab
          aboutContent={<AboutUsTab />}
          offeringContent={<Offerings />}
        />
      </div>

      <Footer />
    </div>
  );
};

export default OrganizationDetails;
