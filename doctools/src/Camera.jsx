import React, { useState, useRef, useCallback } from 'react';
import { AspectRatio, Image, Button, ActionIcon, Card, Container, Grid, Group, Center } from '@mantine/core';
import { IconCamera, IconTrash } from '@tabler/icons-react';
import { jsPDF } from 'jspdf';
import Webcam from 'react-webcam';

export function Camera() {
  const [images, setImages] = useState([]);
  const webcamRef = useRef(null);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages([...images, imageSrc]);
  }, [images]);

  const deleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    images.forEach((image, index) => {
      doc.addImage(image, 'JPEG', 10, 10, 180, 160); // Adjust the position and size as needed
      if (index < images.length - 1) doc.addPage();
    });
    doc.save('scanned.pdf');
  };

  const videoConstraints = {
    facingMode: 'environment',
  };

  return (
    <Container size="sm" style={{ marginTop: '20px' }}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <AspectRatio ratio={16 / 9}>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              style={{ width: '100%' }}
            />
          </AspectRatio>
        </Card.Section>
        <Center mt="md">
          <Button onClick={captureImage} leftIcon={<IconCamera />}>
            Capture Image
          </Button>
        </Center>
      </Card>
      <Grid gutter="md" mt="md">
        {images.map((image, index) => (
          <Grid.Col key={index} span={6}>
            <Card shadow="sm" padding="sm" style={{ position: 'relative' }}>
              <AspectRatio ratio={9 / 9}>
                <Image src={image} alt={`Scanned ${index}`} />
              </AspectRatio>
              <ActionIcon 
                variant="filled" 
                color="red"
                aria-label="Delete" 
                style={{ position: 'absolute', top: 10, right: 10 }}
                onClick={() => deleteImage(index)}
              >
                <IconTrash />
              </ActionIcon>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      {images.length > 0 && (
        <Center mt="md">
          <Button onClick={generatePDF}>
            Generate PDF
          </Button>
        </Center>
      )}
    </Container>
  );
}
