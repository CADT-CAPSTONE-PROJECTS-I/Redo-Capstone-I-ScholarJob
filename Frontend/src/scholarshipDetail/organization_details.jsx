import {
  React,
  Navbar,
  Footer,
  useEffect,
  useState,
  UnderlineTab,
  AboutUsTab,
  Offerings,
  useParams,
  ScholarJobLogoGreen,
  fetchOrganizationDetails,
} from "../import/all_import.jsx";

const OrganizationDetails = () => {
  const { id } = useParams();
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Fetch organization details by ID
    const getOrganizationDetails = async () => {
      try {
        const data = await fetchOrganizationDetails(id);
        if (data.status) {
          setOrganization(data.data); 
        } else {
          setError("Organization not found");
        }
      } catch (err) {
        setError("Failed to fetch organization details");
      } finally {
        setLoading(false); 
      }
    };

    getOrganizationDetails();
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
            src={organization.image_url || ScholarJobLogoGreen} 
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
