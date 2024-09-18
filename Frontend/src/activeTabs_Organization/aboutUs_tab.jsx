import {
  React,
  axios,
  useEffect,
  useState,
  useParams,
} from "../import/all_import";

const AboutUsTab = () => {
  const { id } = useParams(); // Get the organization ID from URL
  const [orgDetail, setOrgDetail] = useState(null); // State to store organization details
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    // Fetch organization details by ID using Axios
    const fetchOrgAboutus = async () => {
      try {
        const response = await axios.get(
          `https://dev-career.cammob.ovh/capstone/Backend/public/api/organization/detail/${id}`
        );

        if (response.data.status) {
          setOrgDetail(response.data.data); // Update organization state with fetched data
        } else {
          setError("Organization not found");
        }
      } catch (err) {
        setError("Failed to fetch organization details");
      } finally {
        setLoading(false); // Stop loading when fetch is done
      }
    };
    fetchOrgAboutus();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="flex flex-row justify-between">
      {/* Column 1: About Us and Contact Us */}
      <div className="flex flex-col w-[650px] space-y-6">
        <div className="rounded-xl bg-white shadow-lg">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
            <h2 className="text-lg text-white font-bold">About Us</h2>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">{orgDetail.about}</p>
          </div>
        </div>

        <div className="rounded-xl bg-white shadow-lg">
          <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
            <h2 className="text-lg text-white font-bold">Contact Us At:</h2>
          </div>
          <div className="p-4">
            <ul className="list-none mb-4 space-y-2">
              <li className="flex items-center">
                <span className="font-bold">Email:&nbsp;</span>
                {orgDetail.email}
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">Phone number:&nbsp;</span>
                {orgDetail.phone_number}
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">Address:&nbsp;</span>
                {orgDetail.address}
              </li>
              <hr className="my-2 border-gray-300" />

              <li className="flex items-center">
                <span className="font-bold">Website:&nbsp;</span>{" "}
                <a href={orgDetail.website}>
                  {orgDetail.website.replace(/^https?:\/\//i, "")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Column 2: Organization Stats */}
      <div className="w-[320px] rounded-xl bg-white shadow-lg">
        <div className="bg-gradient-to-tl from-customTeal-light/50 to-customTeal-dark/80 rounded-t-lg p-4">
          <h2 className="text-lg text-white font-bold">Organization Stats</h2>
        </div>
        <div className="p-4">
          <ul className="list-none mb-4 space-y-2">
            <li className="flex items-center">
              <span className="font-bold">Location:&nbsp;</span>
              {orgDetail.location != null ? orgDetail.location : "N/A"}
            </li>
            <hr className="my-2 border-gray-300" />
            <li className="flex items-center">
              <span className="font-bold">Hour Of Operation:&nbsp;</span>{" "}
              {orgDetail.hour_of_operation  != null ? orgDetail.location : "N/A"}
            </li>
            <hr className="my-2 border-gray-300" />
            <li className="flex items-center">
              <span className="font-bold">Number of Employees:</span> 150
            </li>
            <hr className="my-2 border-gray-300" />

            <li className="flex items-center">
              <span className="font-bold">Office Policy:&nbsp;</span>{" "}
              {orgDetail.offer_policy  != null ? orgDetail.location : "N/A" }
            </li>
            <hr className="my-2 border-gray-300" />

            <li className="flex items-center">
              <span className="font-bold">Founded:&nbsp;</span>{" "}
              {orgDetail.founded  != null ? orgDetail.location : "N/A" }
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTab;
