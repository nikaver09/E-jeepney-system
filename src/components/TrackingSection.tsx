import { useEffect, useMemo, useState } from "react";

import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import {
  Bus,
  Battery,
  Clock,
  Navigation,
  Wifi,
  MapPin,
} from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const jeepneys = [
  {
    id: "EJ-001",
    route: "Roxas → Toril",
    eta: "4 min",
    battery: 87,

    origin: {
      lat: 7.0685,
      lng: 125.6122,
    },

    destination: {
      lat: 7.0174,
      lng: 125.4973,
    },

    color: "#7bc47a",
  },

  {
    id: "EJ-002",
    route: "Buhangin → SM Lanang",
    eta: "7 min",
    battery: 65,

    origin: {
      lat: 7.0947,
      lng: 125.6129,
    },

    destination: {
      lat: 7.0998,
      lng: 125.6311,
    },

    color: "#e8b84b",
  },

  {
    id: "EJ-003",
    route: "Agdao → Matina",
    eta: "11 min",
    battery: 92,

    origin: {
      lat: 7.0846,
      lng: 125.6315,
    },

    destination: {
      lat: 7.0504,
      lng: 125.5947,
    },

    color: "#22d3ee",
  },

  {
    id: "EJ-004",
    route: "Calinan → Roxas",
    eta: "16 min",
    battery: 43,

    origin: {
      lat: 7.1867,
      lng: 125.4553,
    },

    destination: {
      lat: 7.0685,
      lng: 125.6122,
    },

    color: "#f97316",
  },
];

/* LANDMARKS */

const landmarks = [
  {
    id: 1,
    name: "Roxas Night Market",

    position: {
      lat: 7.0685,
      lng: 125.6122,
    },

    color: "#7bc47a",
  },

  {
    id: 2,
    name: "SM Lanang",

    position: {
      lat: 7.0998,
      lng: 125.6311,
    },

    color: "#e8b84b",
  },

  {
    id: 3,
    name: "Matina Crossing",

    position: {
      lat: 7.0504,
      lng: 125.5947,
    },

    color: "#22d3ee",
  },

  {
    id: 4,
    name: "Calinan Terminal",

    position: {
      lat: 7.1867,
      lng: 125.4553,
    },

    color: "#f97316",
  },
];

export default function TrackingSection() {
  const [selected, setSelected] =
    useState(jeepneys[0]);

  const [directionsMap, setDirectionsMap] =
    useState<any>({});

  const [activeLandmark, setActiveLandmark] =
    useState<any>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      import.meta.env
        .VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (!window.google) return;

    const directionsService =
      new window.google.maps
        .DirectionsService();

    jeepneys.forEach((route) => {
      directionsService.route(
        {
          origin: route.origin,

          destination:
            route.destination,

          travelMode:
            window.google.maps
              .TravelMode.DRIVING,
        },

        (result, status) => {
          if (
            status === "OK" &&
            result
          ) {
            setDirectionsMap(
              (prev: any) => ({
                ...prev,
                [route.id]: result,
              })
            );
          }
        }
      );
    });
  }, []);

  const center = useMemo(() => {
    return selected.origin;
  }, [selected]);

  if (!isLoaded) {
    return (
      <div className="loading-map">
        Loading Map...
      </div>
    );
  }

  return (
    <section
      id="track"
      className="tracking-section"
    >
      {/* SIDEBAR */}

      <aside className="tracking-sidebar">

        <div className="sidebar-top">

          <div className="sidebar-icon">
            <Bus size={34} />
          </div>

          <div>

            <h2>E-Jeepney</h2>

            <p>
              Smart Transport System
            </p>
          </div>
        </div>

        <div className="live-status">

          <div className="pulse-dot" />

          LIVE TRACKING
        </div>

        <div className="fleet-list">

          {jeepneys.map((j) => (
            <div
              key={j.id}
              onClick={() =>
                setSelected(j)
              }
              className={`fleet-card ${
                selected.id === j.id
                  ? "active"
                  : ""
              }`}
            >
              <div className="fleet-top">

                <div>

                  <h3>{j.id}</h3>

                  <p>{j.route}</p>
                </div>

                <span className="fleet-eta">

                  <Clock size={12} />

                  {j.eta}
                </span>
              </div>

              <div className="battery-row">

                <div className="battery-top">

                  <span>
                    <Battery size={11} />
                    Battery
                  </span>

                  <span>
                    {j.battery}%
                  </span>
                </div>

                <div className="battery-bar">

                  <div
                    className="battery-fill"
                    style={{
                      width: `${j.battery}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIVE */}

        <div className="tracking-card">

          <div className="tracking-card-top">

            <Navigation size={13} />

            Tracking {selected.id}
          </div>

          <p>
            Route:
            <strong>
              {" "}
              {selected.route}
            </strong>
          </p>

          <p>
            ETA:
            <strong>
              {" "}
              {selected.eta}
            </strong>
          </p>
        </div>
      </aside>

      {/* MAP */}

      <main className="tracking-main">

        <div className="tracking-header">

          <div>

            <h1>
              Real-Time Route Tracking
            </h1>

            <p>
              Landmark Route System
            </p>
          </div>

          <div className="header-live">

            <Wifi size={13} />

            ONLINE
          </div>
        </div>

        <div className="map-container">

          <GoogleMap
            mapContainerStyle={
              containerStyle
            }
            center={center}
            zoom={12}
            options={{
              styles: [
                {
                  elementType:
                    "geometry",

                  stylers: [
                    {
                      color:
                        "#08160e",
                    },
                  ],
                },

                {
                  elementType:
                    "labels.text.fill",

                  stylers: [
                    {
                      color:
                        "#7bc47a",
                    },
                  ],
                },

                {
                  featureType:
                    "road",

                  elementType:
                    "geometry",

                  stylers: [
                    {
                      color:
                        "#163524",
                    },
                  ],
                },
              ],
            }}
          >
            {/* ROUTES */}

            {jeepneys.map((route) => (
              <DirectionsRenderer
                key={route.id}
                directions={
                  directionsMap[
                    route.id
                  ]
                }
                options={{
                  suppressMarkers: true,

                  polylineOptions:
                    {
                      strokeColor:
                        route.color,

                      strokeOpacity:
                        selected.id ===
                        route.id
                          ? 1
                          : 0.4,

                      strokeWeight:
                        selected.id ===
                        route.id
                          ? 8
                          : 5,

                      zIndex:
                        selected.id ===
                        route.id
                          ? 100
                          : 1,
                    },
                }}
              />
            ))}

            {/* LANDMARKS */}

            {landmarks.map(
              (landmark) => (
                <Marker
                  key={landmark.id}
                  position={
                    landmark.position
                  }
                  onClick={() =>
                    setActiveLandmark(
                      landmark
                    )
                  }
                  icon={{
                    path:
                      window.google.maps
                        .SymbolPath
                        .CIRCLE,

                    scale: 9,

                    fillColor:
                      landmark.color,

                    fillOpacity: 1,

                    strokeColor:
                      "#ffffff",

                    strokeWeight: 2,
                  }}
                />
              )
            )}

            {/* INFO WINDOW */}

            {activeLandmark && (
              <InfoWindow
                position={
                  activeLandmark.position
                }
                onCloseClick={() =>
                  setActiveLandmark(
                    null
                  )
                }
              >
                <div className="info-window">

                  <MapPin
                    size={14}
                  />

                  <span>
                    {
                      activeLandmark.name
                    }
                  </span>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>

          <div className="map-live-badge">

            <Wifi size={12} />

            LIVE GPS ROUTING
          </div>
        </div>
      </main>
    </section>
  );
}