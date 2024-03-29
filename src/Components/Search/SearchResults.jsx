import { useSelector } from "react-redux";
import LoadingComp from "./Loading";
import { SearchCompact } from "./SearchCompact";
import HotelsList from "../HotelsList/HotelsList";
export const SearchResults = () => {
  const isLoading = useSelector(state => state.Query.status.isLoading);
    return (
      <div>
        {isLoading ? (
          <LoadingComp />
        ) : (
          <div style={{ border:"1px solid grey",backgroundColor: "#f5f5f5" }}>
            <SearchCompact />
            <div >
                <HotelsList />
            </div>
          </div>
        )}
      </div>
    );
}