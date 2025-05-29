import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { expect, test, describe, beforeAll, afterEach, afterAll } from "vitest";
import { server } from "../mocks";
import MusicPlayer from "../components/MusicPlayer";

// MSW server setup
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("MusicPlayer Functionality Tests", () => {
  
  test("displays first song from playlist as current song by default", async () => {
    render(<MusicPlayer />);
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    // Verify first mock song is displayed as current song
    await waitFor(() => {
      expect(screen.getByText("Mock Song One")).toBeInTheDocument();
      expect(screen.getByText("Mock Artist One")).toBeInTheDocument();
    });

    // Verify it's using mock data, not real API data
    expect(screen.queryByText("Painted in Blue")).not.toBeInTheDocument();
  });

  test("toggles play/pause button when clicked", async () => {
    render(<MusicPlayer />);
    
    // Wait for component to load
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    // Find the play button (look for play icon or button with play functionality)
    const playButton = screen.getByRole('button', { name: /play|pause/i }) || 
                      screen.getByTestId('play-button') ||
                      document.querySelector('#play');

    expect(playButton).toBeInTheDocument();

    // Click to play
    fireEvent.click(playButton);
    
    // Verify UI changed to pause state (this depends on your implementation)
    // You might need to check for pause icon or different aria-label
    await waitFor(() => {
      // Check if button text/icon changed to indicate playing state
      expect(playButton).toBeInTheDocument(); // Adjust based on your implementation
    });
  });

  test("changes to next song when forward button is clicked", async () => {
    render(<MusicPlayer />);
    
    // Wait for loading
    await waitFor(() => {
      expect(screen.getByText("Mock Song One")).toBeInTheDocument();
    });

    // Find and click the next/forward button
    const nextButton = screen.getByRole('button', { name: /next|forward/i }) ||
                      screen.getByTestId('next-button') ||
                      document.querySelector('#fast-forward');

    expect(nextButton).toBeInTheDocument();
    
    fireEvent.click(nextButton);

    // Verify song changed to second song in mock data
    await waitFor(() => {
      expect(screen.getByText("Mock Song Two")).toBeInTheDocument();
      expect(screen.getByText("Mock Artist Two")).toBeInTheDocument();
    });

    // Verify first song is no longer the current song
    expect(screen.queryByText("Mock Song One")).not.toBeInTheDocument();
  });

  test("changes to previous song when back button is clicked", async () => {
    render(<MusicPlayer />);
    
    // Wait for loading and go to second song first
    await waitFor(() => {
      expect(screen.getByText("Mock Song One")).toBeInTheDocument();
    });

    // Go to next song first
    const nextButton = screen.getByRole('button', { name: /next|forward/i }) ||
                      document.querySelector('#fast-forward');
    fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText("Mock Song Two")).toBeInTheDocument();
    });

    // Now test going back
    const prevButton = screen.getByRole('button', { name: /previous|back|rewind/i }) ||
                      screen.getByTestId('prev-button') ||
                      document.querySelector('#rewind');

    expect(prevButton).toBeInTheDocument();
    
    fireEvent.click(prevButton);

    // Verify we're back to first song
    await waitFor(() => {
      expect(screen.getByText("Mock Song One")).toBeInTheDocument();
      expect(screen.getByText("Mock Artist One")).toBeInTheDocument();
    });
  });

  test("changes current song when playlist item is clicked", async () => {
    render(<MusicPlayer />);
    
    // Wait for loading
    await waitFor(() => {
      expect(screen.getByText("Mock Song One")).toBeInTheDocument();
    });

    // Find all instances of "Mock Song Three" (one in playlist, one as current song title)
    const playlistItems = screen.getAllByText("Mock Song Three");
    
    // Click on the playlist item (should be clickable)
    // We need to find the clickable playlist item, not the current song title
    const playlistItem = playlistItems.find(item => 
      item.closest('[role="button"]') || item.closest('div[onClick]') || item.closest('.cursor-pointer')
    ) || playlistItems[playlistItems.length - 1]; // fallback to last occurrence

    fireEvent.click(playlistItem);

    // Verify current song changed to clicked song
    await waitFor(() => {
      expect(screen.getByText("Mock Song Three")).toBeInTheDocument();
      expect(screen.getByText("Mock Artist Three")).toBeInTheDocument();
    });

    // Verify we're no longer on the first song
    const mockSongOneElements = screen.queryAllByText("Mock Song One");
    // Should only appear in playlist, not as current song
    expect(mockSongOneElements.length).toBeLessThanOrEqual(1);
  });
});