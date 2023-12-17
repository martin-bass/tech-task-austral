import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

//Components
import PokemonList from "../components/PokemonList";

const Home: React.FC = () => {
  const reload = () => {
    window.location.href = "/";
  };

  return (
    <IonPage>
      <IonHeader
        style={{
          "--ion-background-color": "#853c1b",
          "--ion-text-color": "#fff",
        }}
      >
        <IonToolbar>
          <IonRouterLink onClick={reload} className="IonRouterLink">
            <IonTitle>Pokemon App - Austral Challenge</IonTitle>
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ "--ion-background-color": "#f2d895" }}>
        <PokemonList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
