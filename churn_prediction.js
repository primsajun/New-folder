import java.util.*;

public class ChatAIBot {

    private static final Scanner scanner = new Scanner(System.in);
    private static final Map<String, String> responses = new HashMap<>();
    private static final List<String> unknownResponses = Arrays.asList(
        "I'm not sure I understand that.",
        "Can you tell me more?",
        "Interesting... go on.",
        "I see. Can you elaborate?",
        "Hmm, let me think about that..."
    );

    public static void main(String[] args) {
        System.out.println("🤖 ChatBot: Hello! I'm your Java AI Bot. Type 'bye' to exit.");
        setupResponses();

        while (true) {
            System.out.print("You: ");
            String userInput = scanner.nextLine().trim();

            if (userInput.equalsIgnoreCase("bye")) {
                System.out.println("🤖 ChatBot: Goodbye! Have a nice day.");
                break;
            }

            String response = getResponse(userInput);
            System.out.println("🤖 ChatBot: " + response);
        }
    }

    
    private static void setupResponses() {
        responses.put("hi", "Hi there!");
        responses.put("hello", "Hello! How can I assist you?");
        responses.put("how are you", "I'm just a bot, but I'm doing well!");
        responses.put("what is your name", "I'm a simple Java ChatBot.");
        responses.put("help", "Sure! Ask me anything.");
        responses.put("time", "I don't have a watch, but your system clock knows!");
        responses.put("date", "I think it's a lovely day today!");
        responses.put("who made you", "I was created by a Java programmer.");
        responses.put("joke", "Why don't scientists trust atoms? Because they make up everything!");
    }

    
    private static String getResponse(String input) {
        input = input.toLowerCase();

        for (String key : responses.keySet()) {
            if (input.contains(key)) {
                return responses.get(key);
            }
        }

        
        return getRandomUnknownResponse();
    }

    private static String getRandomUnknownResponse() {
        Random random = new Random();
        return unknownResponses.get(random.nextInt(unknownResponses.size()));
    }
}

