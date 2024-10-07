import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Formulaire = ({ isOpen, handleClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const API_URL = process.env.NODE_ENV === 'production' ? '/contact' : 'http://localhost:5000/contact';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!firstName || !lastName || !email || message.trim() === '') {
      setError("Tous les champs sont requis.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setError('');
      } else {
        setError("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Impossible de contacter le serveur.");
    } finally{
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contactez-moi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success ? (
          <p>Message envoyé avec succès ! Je vous répondrai dès que possible. À très bientôt.</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="family-name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez votre prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="given-name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Button variant="primary" type="submit" style={{ backgroundColor: 'brown', borderColor: 'transparent' }}>
              {isSubmitting ? 'Envoi...' : 'Envoyer'}
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default Formulaire;